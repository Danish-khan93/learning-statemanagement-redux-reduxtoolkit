import { useDispatch, useSelector } from "react-redux";
import {
  commentFetch,
  commentSelector,
  deleteComment,
  updateComment,
} from "../redux/CreateEntityAdaptor2/CommentSlice";
import { useEffect } from "react";
import { AppDispatch } from "../redux/store";

const Comment = () => {
  //   debugger;
  const dispatch = useDispatch<AppDispatch>();
  const total = useSelector(commentSelector.selectTotal);
  const allComments = useSelector(commentSelector.selectAll);
  const CommentsById = useSelector((state) =>
    commentSelector.selectById(state, 3)
  );
  console.log(total, "total");
  console.log(allComments, "allComments");
  console.log(CommentsById, "CommentsByIds");

  useEffect(() => {
    dispatch(commentFetch());
  }, []);

  const onDelete = (id: number) => {
    dispatch(deleteComment(id));
  };
  const onPatch = (id: number, newData: {body:string}) => {
    dispatch(updateComment({ id, newData }));
  };
  return (
    <div>
      {allComments.map((value) => {
        return (
          <div
            className="border-solid border-2 border-indigo-600 rounded m-5 p-10 flex justify-between items-center"
            key={value.id}
          >
            <div className="flex gap-5">
              <h1>{value.id}</h1>
              <h1>{value.name}</h1>
              <h1>{value.body}</h1>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => onDelete(value.id)}
                className="bg-red-700 text-[#fff] p-2 rounded"
              >
                delete
              </button>
              <button
                onClick={() =>
                  onPatch(value.id, {
                    body: "string",
                  })
                }
                className="bg-green-700 text-[#fff] p-2 rounded"
              >
                patch
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comment;
