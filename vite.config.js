
// yashparmar05.github.io
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});



// if repo name = "portfolio" then uncomment the below code and comment the above code
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   base: "/portfolio/",
// });