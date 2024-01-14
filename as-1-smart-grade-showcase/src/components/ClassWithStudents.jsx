/* eslint-disable react/prop-types */

const StudentRow = ({ student }) => {
  return (
    <tr key={student?.id} className="border-b border-[#7ECEB529]">
      <td className="p-5 text-sm md:text-xl">{student?.id}</td>
      <td className="p-5 text-sm md:text-xl">
        <div className="flex space-x-3 items-center">
          <img
            className="w-8 h-8 rounded-full bg-gray-500"
            src={student?.avatar}
            width="32"
            height="32"
            alt={student?.name}
          />
          <span className="whitespace-nowrap">{student?.name}</span>
        </div>
      </td>
      <td className="p-5 text-sm md:text-xl text-center">{student?.score}</td>
      <td className="p-5 text-sm md:text-xl text-center">
        {student?.percentage}
      </td>
    </tr>
  );
};

const ClassWithStudents = ({ selectedClass }) => {
  return (
    <>
      {/* Class Title */}
      <tr className="bg-white/5">
        <td className="p-5 text-sm md:text-xl" colSpan="4">
          {selectedClass?.title}
        </td>
      </tr>
      {selectedClass?.students?.map((student) => (
        <StudentRow key={student?.id} student={student} />
      ))}
    </>
  );
};

export default ClassWithStudents;
