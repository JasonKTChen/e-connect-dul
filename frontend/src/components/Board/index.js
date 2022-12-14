// Kuan Tsa Chen
import "./board.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Board = ({ current }) => {
  return (
    <>
      <div className="board">
        <h1 className="board-title">
          {current !== undefined
            ? `Hi, ${current}`
            : `Get the Best Connections You Deserve!`}
        </h1>
        {current !== undefined ? (
          ""
        ) : (
          <span className="board-signup-span">
            <Link
              aria-label="board-signup-link"
              to="/signup"
              className="board-signup"
            ></Link>
          </span>
        )}
      </div>
    </>
  );
};
Board.propTypes = {
  current: PropTypes.string.isRequired,
};
export default Board;
