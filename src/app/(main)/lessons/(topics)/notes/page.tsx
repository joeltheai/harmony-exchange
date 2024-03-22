import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

const NoteLessonPage = () => {
  return (
    <MaxWidthWrapper>
      <div className="mx-auto max-w-4xl p-5">
        <h1 className="mb-4 text-3xl font-bold">Notes</h1>
        <h2 className="mb-3 text-2xl font-semibold">Natural Notes</h2>
        <p className="mb-4">
          The natural notes derive their names from the first seven letters of
          the alphabet, specifically A, B, C, D, E, F, and G, always
          capitalized. The piano serves as a valuable tool for visualizing these
          notes. In the piano diagram below, the starting point is typically C.
          This convention holds true in the displayed piano layout as well.
        </p>
        <Image
          src="/images/1.Notes/1.Natural Notes.png"
          alt="Natural Notes"
          width={600}
          height={218}
          className="mb-4 rounded-box"
        />
        <p className="mb-4">
          The black keys are organized into alternating groups of two and three,
          with the note C consistently positioned on the white key to the left
          of the group of two black keys. Each note appears in multiple
          locations on the piano; notes situated further to the right indicate
          higher pitches, while those to the left represent lower pitches.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">Middle C</h2>
        <p className="mb-4">
          Middle C, positioned centrally on the piano, serves as a crucial
          reference point. In a standard 88-key piano, it typically stands as
          the fourth C from the left.
        </p>

        <Image
          src="/images/1.Notes/2.Middle C.png"
          alt="Natural Notes"
          width={600}
          height={218}
          className="mb-4 rounded-box"
        />
        <p className="mb-4">
          Given its significance, middle C aids in distinguishing between
          different versions of a note, whether high or low. Utilizing middle C
          as a reference simplifies the process of selecting the correct pitch
          for a given note.
        </p>

        <h2 className="mb-3 text-2xl font-semibold">Octaves</h2>
        <p className="mb-4">
          A standard 88-key piano offers seven to eight variations of each note,
          with the interval between a note and its nearest higher or lower
          counterpart referred to as an octave.
        </p>

        <Image
          src="/images/1.Notes/3.1.Octaves.png"
          alt="Natural Notes"
          width={600}
          height={218}
          className="mb-4 rounded-box"
        />
        <p className="mb-4">
          Typically, notes are identified by the same name regardless of their
          pitch, but a system exists for distinguishing between low and high
          notes. This system involves adding a number after the note name to
          denote the octave in which the note is located.
        </p>
        <p className="mb-4">
          Each octave, starting from C, is assigned a number. The lowest C on
          the piano is in octave 1, while the highest C is in octave 8. All
          notes within an octave are assigned the same number (e.g., C1, D1, E1,
          F1, G1, A1, and B1).
        </p>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Octave</th>
                <th>Notes</th>
                <th>Pitch</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Octave 7</td>
                <td>C7 → B7</td>
                <td>Very high</td>
              </tr>
              <tr>
                <td>Octave 6</td>
                <td>C6 → B6</td>
                <td>High</td>
              </tr>
              <tr>
                <td>Octave 5</td>
                <td>C5 → B5</td>
                <td>Moderately high</td>
              </tr>
              <tr>
                <td>Octave 4</td>
                <td>C4 (Middle C) → B4</td>
                <td>Medium</td>
              </tr>
              <tr>
                <td>Octave 3</td>
                <td>C3 → B3</td>
                <td>Moderately low</td>
              </tr>
              <tr>
                <td>Octave 2</td>
                <td>C2 → B2</td>
                <td>Low</td>
              </tr>
              <tr>
                <td>Octave 1</td>
                <td>C1 → B1</td>
                <td>Very low</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mb-3 text-2xl font-semibold">
          Half steps & Whole Steps
        </h2>
        <p className="mb-4">
          The interval between each of the twelve distinct notes is referred to
          as a half step or semitone. This means that the space between any
          adjacent white or black key on the piano, whether to its right or
          left, constitutes a half step.
        </p>
        <p className="mb-4">
          Specifically, the gap between the natural notes E and F, as well as
          between B and C, equals one half step. Conversely, the distance
          between all other keys amounts to two half steps, which is also termed
          a whole step or whole tone.
        </p>


        <Image
          src="/images/1.Notes/4.Halfsteps, wholesteps.png"
          alt="Natural Notes"
          width={600}
          height={218}
          className="mb-4 rounded-box"
        />
      </div>
    </MaxWidthWrapper>
  );
};

export default NoteLessonPage;
