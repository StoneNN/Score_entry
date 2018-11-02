
// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      title: 'Score_entry_n',
      dll: true,
      routes: {
        exclude: [],
      },
      hardSource: true,
    }],
  ],
}
