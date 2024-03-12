import Image from "next/image";

const AccidentalsLessonsPage = () => {
  return (
    <div className="mx-auto max-w-4xl p-5">
      <h1 className="mb-4 text-3xl font-bold">Accidental</h1>
      <p className="mb-4">
        In music notation, an accidental is a symbol that raises or lowers a
        natural note by one or two half steps. The accidental causes the pitch
        to shift, making the note either higher or lower than the original
        natural note. Accidentals are written in front of the notes, while in
        textual notation, they come after the note names.
      </p>

      <h2 className="mb-3 text-2xl font-semibold">Contents</h2>
      <ol className="mb-4 list-inside list-decimal">
        <li>The five accidentals</li>
        <li>Accidental notes</li>
        <li>Enharmonic notes</li>
        <li>Notation of accidentals</li>
        <li>Key signatures</li>
        <li>Courtesy accidentals</li>
      </ol>

      <h2 className="mb-3 text-2xl font-semibold">1. The five accidentals</h2>
      <p className="mb-4">There are five different accidentals:</p>
      <ul className="mb-4 list-inside list-disc">
        <li>A sharp (♯) raises a note by a half step.</li>
        <li>A flat (♭) lowers a note by a half step.</li>
        <li>A double-sharp (x) raises a note by two half steps.</li>
        <li>A double-flat (♭♭) lowers a note by two half steps.</li>
        <li>A natural (♮) cancels the effect of another accidental.</li>
      </ul>

      <h2 className="mb-3 text-2xl font-semibold">2. Accidental Notes</h2>
      <p>
        A note with a sharp (♯) is played a half step above the original note.
        The seven sharp notes are C♯ (pronounced &quot;C-sharp&quot;), D♯, E♯,
        F♯, G♯, A♯, and B♯:
      </p>
      <p>
        A note with a flat (♭) is played a half step below the original note.
        The seven flat notes are C♭ (pronounced &quot;C-flat&quot;), D♭, E♭, F♭,
        G♭, A♭, and B♭:
      </p>
      <p>
        A note with a double-sharp (x) is played two half steps above the
        original note. The seven double-sharp notes are Cx
        (&quot;C-double-sharp&quot;), Dx, Ex, Fx, Gx, Ax, and Bx:
      </p>

      <p>
        A note with a double-flat (♭♭) is played two half steps below the
        original note. The seven double-flat notes are C♭♭
        (&quot;C-double-flat&quot;), D♭♭, E♭♭, F♭♭, G♭♭, A♭♭, and B♭♭:
      </p>
      <br />
      <h2 className="mb-3 text-2xl font-semibold">3. Enharmonic notes</h2>
      <p>
        There are multiple names for the piano&apos;s black keys. For example,
        the black key between C and D can be called C♯ and D♭. The most common
        names for the black keys are displayed on the piano below.{" "}
      </p>
      <p>
        Enharmonic notes are notes having the same pitch (that is, notes that
        fall on the same key on a piano) but distinct names and notation. As an
        example, the note C♯ is enharmonic with D♭ and the note E♭ is enharmonic
        with D♯<div className="br"></div>There are other names for the
        piano&apos;s white keys as well. For example, the key for the note C is
        also called B♯. On the piano below, you will find the most common names
        for the white keys.
      </p>
      <p>
        Double accidentals (and ♭♭) are very rarely utilized, hence they are
        absent from the two pianos mentioned above. For instance, the black key
        for the note G♭ is also named E, while the keys for the notes G and A♭♭
        are also called F and A♭♭. <br />
        The notation and naming of the note are determined by the musical
        context. A black key needs to be marked with a flat in some situations
        and a sharp in others. If necessary, read more about this in the texts
        intervals, chords, scales and keys.
      </p>
      <br />
      <h2 className="mb-3 text-2xl font-semibold">
        4. Notation of accidentals
      </h2>
      <p>
        Accidentals are written in front of the notes. An accidental applies:{" "}
        <br />
        <ul className="mb-4 list-inside list-disc">
          <li>to the note immediately following the accidental</li>
          <li>to subsequent notes on the same line or in the same space</li>
          <li>until a barline or a new accidental for the same note. </li>
        </ul>
        The following example shows how the flat for the note after the sharp in
        the first bar cancels it. The barline cancels the flat. The sharp in the
        second bar does not apply to the note at the top of the staff and is
        canceled by the natural for the last note:
      </p>
      <p>
        An accidental for a note with a tie applies until the end of the tie if
        the tie passes a barline. In other words, the accidental applies to both
        of the tied notes, but not to subsequent notes in the new bar:
      </p>
      <br />
      <h2 className="mb-3 text-2xl font-semibold">5. Key Signatures</h2>
      <p>
        If an accidental is needed on any note throughout a piece, it is written
        in a key signature instead of each time the note occurs. A group of
        flats or sharps at the beginning of the staff right after the clef is
        called a key signature.
      </p>
      <p>
        An accidental in a key signature applies:
        <li>
          to all notes with the same note name regardless of their location{" "}
        </li>
        <li>until the end of the piece of music or a new key signature.</li> The
        two sharps in the key signature of the example below apply to all
        possible versions of the notes F and C. In the first bar, the sharp for
        F is canceled temporarily by a natural and in the second bar the sharp
        for C is canceled temporarily by a flat:
      </p>
      <p>
        A key signature may be replaced with another key signature during a
        piece of music. In the first example below, the three sharps are removed
        by three naturals, and in the second example the four flats are replaced
        by two sharps:
      </p>
      <p>
        Accidentals in a key signature are always written in a specific pattern.
        For more information, read the text about keys.
      </p>
      <br />
      <h2 className="mb-3 text-2xl font-semibold">6. Courtesy accidentals</h2>
      <p className="mb-4">
        Courtesy accidentals are accidentals that are not strictly necessary,
        but are written to clarify the correct pitch, thus avoiding
        misunderstandings. Courtesy accidentals are written as normal
        accidentals, sometimes enclosed by brackets.
      </p>
      <p className="mb-4">
        Courtesy accidentals are primarily used in two cases:
      </p>
      <ul className="mb-4 list-inside list-disc">
        <li>
          When a note with an accidental is repeated in the following bar. The
          courtesy accidental signifies that the accidental does not apply in
          the following bar.
        </li>
        <li>
          When a tie extends an accidental to a new bar where the note is
          repeated. The courtesy accidental signifies that the accidental does
          not apply after the tie.
        </li>
      </ul>
      <p className="mb-4">
        The first courtesy accidental (♯) in the example below indicates that
        the natural does not apply in the bar that follows, whereas the other
        courtesy accidental (♮) in the example below indicates that the flat
        does not apply after the tie:
      </p>
      {/* ... Example or illustration if needed ... */}
    </div>
  );
};

export default AccidentalsLessonsPage;
