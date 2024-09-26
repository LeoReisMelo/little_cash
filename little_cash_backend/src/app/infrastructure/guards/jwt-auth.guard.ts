import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Jwt } from '../utils/jwt';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: Jwt,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const { headers } = ctx.getContext();

    const token = headers.authorization?.split(' ')[1];

    if (!token) {
      return false;
    }

    try {
      const payload = await this.jwtService.verifyToken(token);

      ctx.getContext().user = payload;
    } catch (error: any) {
      console.log(error);
      return false;
    }

    return this.validatePermissions(ctx.getContext().user, context);
  }

  private async validatePermissions(
    user: any,
    context: ExecutionContext,
  ): Promise<boolean> {
    const requiredRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );

    if (!requiredRoles) {
      return true;
    }

    return requiredRoles.some((role) => user.roles.includes(role));
  }
}
