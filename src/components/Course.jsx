import { useDispatch, useSelector } from "react-redux";

function Course() {
  const { courses } = useSelector(({ form, courses: { data, searchTerm } }) => {
    const filteredCourses = data.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      courses: filteredCourses,
    };
  });

  const dispatch = useDispatch();

  const renderedCourses = courses.map((course) => {
    return (
      <>
        <div
          className="text-center text-xl mt-3 relative"
          key={course.id}
        >
          <input className="border-2 border-gray-800 mx-10" value={course.name} />
          <input
            className="border-2 border-gray-800 "
            value={course.description}
          />
          <h1 className="text-white">{course.cost}</h1>
          <button
            type="reset"
            className="bg-sky-600 rounded-md w-24 h-8 text-white hover:scale-105 transition ease-in-out"
            onClick={() => dispatch(removeCourse(course.id))}
          >
            Delete
          </button>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="mt-16 relative ">
        <div className="block mx-auto  bg-white">
          {renderedCourses}
        </div>{" "}
      </div>
    </>
  );
}

export default Course;
