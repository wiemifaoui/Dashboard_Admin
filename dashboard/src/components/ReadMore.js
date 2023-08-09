import { useState } from "react";

const ReadMore = ({ text, max = 10 }) => {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p>
      {isReadMore && text ? text.slice(0, 30) : text}
      <span className="text-primary" onClick={toggleReadMore}>
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

export default ReadMore;
