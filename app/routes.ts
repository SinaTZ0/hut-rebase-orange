import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/site_layout/site-layout.tsx", [index("routes/home/home.tsx")]),

  /*===== Resource Routes =====*/
  route("api/auth/*", "routes/api_auth/api-auth.ts"),
  route("rpc/*", "routes/rpc/rpc.ts"),
] satisfies RouteConfig;
