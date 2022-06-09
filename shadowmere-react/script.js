const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));

const e = React.createElement;
// return (
//     <button onClick={() => this.setState({ liked: true })}>
//       Like
//     </button>
//   );