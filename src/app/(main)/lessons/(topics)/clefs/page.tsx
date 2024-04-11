import Image from "next/image";

const ClefsPage = () => {
  return (
    <div className="mx-auto max-w-4xl p-5">
      <h1 className="mb-4 text-3xl font-bold">Clefs</h1>
      <p className="mb-4">
        A clef is a symbol positioned at the start of the staff, indicating the
        pitch range of the notes written on the staff. Various clefs exist, each
        establishing a specific note as a reference point, enabling the notation
        of both low and high pitches with minimal use of ledger lines. This
        approach enhances the readability of the notes.
      </p>

      <h2 className="mb-3 text-2xl font-semibold">Treble Clef</h2>
      <p className="mb-4">
        The treble clef, also known as the G clef, denotes that the note G above
        middle C is positioned on the second line of the staff. The treble clef
        symbol curves around the line where the note G is situated.
      </p>

      <Image
        src="/images/3.Clefs/1.Treble Clef.1.png"
        alt="Natural Notes"
        width={600}
        height={218}
        className="mb-4 rounded-box"
      />
      <p className="mb-4">
        Comparing the notes in the treble clef to those on the piano reveals the
        placements of the notes C and G on the staff. Keeping in mind the
        positions of C and G aids in interpreting the remaining notes on the
        staff, facilitating easier reading.
      </p>
      <Image
        src="/images/3.Clefs/1.Treble Clef.2.png"
        alt="Natural Notes"
        width={600}
        height={218}
        className="mb-4 rounded-box"
      />
      <p className="mb-4">
        The treble clef serves as a valuable tool for notating notes positioned
        above middle C. It finds application in songbooks and is particularly
        suited for high-pitched instruments like the guitar, violin, flute,
        clarinet, saxophone, and trumpet.
      </p>

      <h2 className="mb-3 text-2xl font-semibold">Bass Clef</h2>
      <p className="mb-4">
        The bass clef, known as the F clef, signifies that the note F located
        below middle C aligns with the fourth line of the staff. The bass clef
        symbol, featuring two dots, encompasses the line corresponding to the
        note F.
      </p>

      <Image
        src="/images/3.Clefs/2.1.Bass Clef.png"
        alt="Natural Notes"
        width={600}
        height={218}
        className="mb-4 rounded-box"
      />
      <p className="mb-4">
        When comparing the notes in the bass clef to those on the piano, pay
        attention to the placements of the notes C and F on the staff. Keeping
        in mind the positions of C and F can facilitate the reading of other
        notes on the staff.
      </p>

      <Image
        src="/images/3.Clefs/2.2.Bass Clef.png"
        alt="Natural Notes"
        width={600}
        height={218}
        className="mb-4 rounded-box"
      />
      <p className="mb-4">
        The bass clef is employed for notating notes positioned below middle C,
        making it particularly suitable for low-pitched instruments like the
        bass guitar, double bass, cello, bassoon, trombone, and tuba.
      </p>

      <h2 className="mb-3 text-2xl font-semibold">Grand Staff</h2>
      <p className="mb-4">
        The grand staff consists of two staves: one with the treble clef in the
        upper position and the other with the bass clef in the lower position.
        These staves are joined by a vertical line on the left side and a brace.
      </p>

      <Image
        src="/images/3.Clefs/3.1.Grand Staff.png"
        alt="Natural Notes"
        width={600}
        height={218}
        className="mb-4 rounded-box"
      />
      <p className="mb-4">
        Middle C falls between the two staves and is written on the first ledger
        line below the upper staff or the first ledger line of the lowermost
        staff. Notice the symmetrical position of the different versions of the
        note C. Remembering their positions make it easier to read the other
        notes on the staff.
      </p>

      <Image
        src="/images/3.Clefs/3.2.Grand Staff.png"
        alt="Natural Notes"
        width={600}
        height={218}
        className="mb-4 rounded-box"
      />
      <p className="mb-4">
        Comparing the notes of the grand staff to those on the piano reveals
        that the notes around middle C can be notated in both the upper and
        lower staves, employing one or more ledger lines as necessary.
      </p>

      <Image
        src="/images/3.Clefs/3.3.Grand Staff.png"
        alt="Natural Notes"
        width={800}
        height={218}
        className="mb-4 rounded-box"
      />
      <p className="mb-4">
        The grand staff is employed for instruments capable of producing both
        low and high pitches, serving as a common notation system for
        instruments such as the piano, organ, marimba, and harp. Typically,
        notes in the lower staff are played using the left hand, while those in
        the upper staff are played with the right hand.
      </p>

      <h2 className="mb-3 text-2xl font-semibold">Alto Clef</h2>
      <p className="mb-4">
        The alto clef, categorized as a C clef, designates that middle C aligns
        with the third line of the staff. Positioned at the center of the staff,
        the alto clef indicates the line where middle C is located.
      </p>

      <Image
        src="/images/3.Clefs/4.1.Alto Clef.png"
        alt="Natural Notes"
        width={300}
        height={218}
        className="mb-4 rounded-box"
      />
      <p className="mb-4">
        The alto clef is primarily utilized for the viola due to its limited
        application. However, it&apos;s common to substitute either the treble
        clef or the bass clef instead.
      </p>

      <Image
        src="/images/3.Clefs/4.2.Alto Clef.png"
        alt="Natural Notes"
        width={700}
        height={218}
        className="mb-4 rounded-box"
      />
      <h2 className="mb-3 text-2xl font-semibold">Tenor Clef</h2>
      <p className="mb-4">
        The tenor clef, a type of C clef, designates the fourth line of the
        staff as the position where middle C is located. Positioned at the
        center of the staff, the tenor clef indicates the line where middle C
        falls.
      </p>

      <Image
        src="/images/3.Clefs/5.1.Tenor Clef.png"
        alt="Natural Notes"
        width={300}
        height={218}
        className="mb-4 rounded-box"
      />

      <p>
        When comparing the notes in the tenor clef to those on the piano, pay
        attention to the varying placements of the note C. Keeping track of the
        position of C aids in interpreting the other notes on the staff more
        easily.
      </p>

      <Image
        src="/images/3.Clefs/5.2.Tenor Clef.png"
        alt="Natural Notes"
        width={700}
        height={218}
        className="mb-4 rounded-box"
      />

      <p className="mb-4">
        The tenor clef has a limited scope. It is primarily used for cello,
        bassoon, and trombone. Often, however, either the treble clef or the
        bass clef is used instead.
      </p>

      <h2 className="mb-3 text-2xl font-semibold">Octave Clefs</h2>
      <p className="mb-4">
        Octave clefs are modifications of the treble and bass clefs, signaling
        that the notes should be played at a different pitch level.
      </p>
      <p className="mb-4">
        For instance, consider these six distinct notations of middle C:
      </p>
      <p className="mb-4">
        In very rare cases, the number 8 is replaced by the number 15 indicating
        that the notes are played two octaves higher or lower than notated.
      </p>
      <p className="mb-4">
        Octave clefs are used to avoid several ledger lines that are difficult
        to read. If only a few notes on the staff require several ledger lines,
        a normal clef is used in combination with one of the following symbols:
      </p>

      <h2 className="mb-3 text-2xl font-semibold">Clef Change</h2>
      <p className="mb-4">
        Typically, a single clef is employed consistently throughout an entire
        musical composition. However, if certain notes extend significantly
        beyond the staff, changing the clef becomes a viable option to prevent
        excessive ledger lines, thus enhancing the readability of the notes.
      </p>
      <p className="mb-4">
        If the clef is changed at the beginning of a new line, the clef is
        written both at the beginning of the new staff and at the end of the
        previous staff. Clefs in the middle of the staff are smaller than clefs
        at the beginning of the staff.
      </p>
    </div>
  );
};

export default ClefsPage;
