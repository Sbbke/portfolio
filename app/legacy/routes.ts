import {
  type RouteConfig,
  route,
  layout,
  index,
  prefix,
} from "@react-router/dev/routes";

export default [
  layout(
    "./routes/layout.tsx",  //error boundary
    [
      
    index("./routes/home.tsx"),               
    ...prefix("cv", [
      index("./routes/cv.tsx"),               
      route("experience", "./routes/cv/experience.tsx"), 
    ]),

    ...prefix("blog", [
      index("./routes/blog.tsx"),             
      route(":slug", "./routes/blog/$slug.tsx"),
    ]),
    route("*", "./routes/error-page.tsx")
  ],

),
] satisfies RouteConfig;

