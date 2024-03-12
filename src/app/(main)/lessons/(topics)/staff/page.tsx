const StaffLessons = () => {
  return (
    <div className="mx-auto max-w-4xl p-5">
      <h1 className="mb-4 text-3xl font-bold">Staff</h1>
      <p className="mb-4">
        The staff, also known as the stave, consists of five horizontal lines
        utilized in music notation.
      </p>
      <p className="mb-4">
        Notes can be written either on these lines or within the spaces between
        them. The plural form of both &quot;staff&quot; and &quot;stave&quot; is
        &quot;staves&quot;.
      </p>

      <h2 className="mb-3 text-2xl font-semibold">Staff Positions</h2>
      <p className="mb-4">
        The staff consists of five horizontal lines and four spaces:
      </p>
      <ul className="mb-4 list-inside list-disc">
        <li>
          Notes can be placed either directly on the lines or within the spaces
          between them.
        </li>
        <li>
          When a note is positioned on a line, the line passes through the
          center of the note, while a note written in a space occupies the
          entire space.
        </li>
        <li>
          Each note depicted on the staff corresponds to a natural note, with
          higher positions indicating higher pitches and lower positions
          indicating lower pitches.
        </li>
        <li>
          Reading notes follows a left-to-right progression, meaning notes
          situated on the left are played before those on the right.
        </li>
        <li>
          Additionally, notes aligned vertically are played simultaneously.
        </li>
      </ul>

      <h2 className="mb-3 text-2xl font-semibold">Ledger Lines</h2>
      <p className="mb-4">
        Notes can be written above and below the staff using ledger lines.
        Ledger lines are short lines that extend the staff when notes are too
        high or low to write on the staff itself:
      </p>
      <p className="mb-4">
        You can use as many ledger lines as you need. Notes located just above
        and below the staff are written without ledger lines.
      </p>

      <h2 className="mb-3 text-2xl font-semibold">Lines and Spaces</h2>
      <p>
        The lines and spaces of the staff are numbered in ascending order from
        bottom to top. This means that the first line refers to the bottom line,
        while the fifth line corresponds to the top line.
      </p>
    </div>
  );
};

export default StaffLessons;
