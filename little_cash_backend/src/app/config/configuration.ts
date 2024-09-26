import { get } from 'env-var';

export default () => ({
  JWT_SECRET_KEY: get('JWT_SECRET_KEY').required().asString(),
});
