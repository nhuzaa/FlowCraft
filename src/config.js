

/**
 * Application wide configuration.
 */
export const config = {
  env: process.env.NODE_ENV,
  basename: process.env.REACT_APP_BASE_NAME,
  apiURL: process.env.VITE_API_URL,
};

export const endpoints  = {
  workflows: '/workflows',
  // nodes: '/workflows/05795f15-2e30-4737-921b-b7775c00f3ef/nodes2',
  nodes: (id) => `/workflows/${id}/nodes2`,
  executions: (id) => `/workflows/${id}/executions`,
  users: {
    self: '/users/self',
  },
};



