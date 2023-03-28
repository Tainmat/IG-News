export const Post = ({ author, content } = props) => {
  return (
    <div>
      <p>{author}</p>
      <p>{content}</p>
    </div>
  );
};
