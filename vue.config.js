const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig(
  {
    transpileDependencies: true,
  },
  {
    css: {
      loaderOptions: {
        sass: {
          prepenData: ' @import "@/assets/styles.sass"; ',
        },
      },
    },
  }
);

// module.exports = {
//   css: {
//     loaderOptions: {
//       sass: {
//         prepenData: ' @import "@/assets/styles.sass"; '
//       }
//     }
//   }
// }
