import { TypographyBlockquote } from "./blockquote";
import { TypographyH1 } from "./h1";
import { TypographyH2 } from "./h2";
import { TypographyH3 } from "./h3";
import { TypographyListItem } from "./li";
import { TypographyP } from "./p";
import { TypographyList } from "./ul";

export function TypographyDemo() {
  return (
    <div>
      <TypographyH1>The Joke Tax Chronicles</TypographyH1>
      <TypographyP>
        Once upon a time, in a far-off land, there was a very lazy king who
        spent all day lounging on his throne. One day, his advisors came to him
        with a problem: the kingdom was running out of money.
      </TypographyP>
      <TypographyH2>The King's Plan</TypographyH2>
      <TypographyP>
        The king thought long and hard, and finally came up with
        <a
          href="#"
          className="font-medium text-primary underline underline-offset-4"
        >
          a brilliant plan
        </a>
        : he would tax the jokes in the kingdom.
      </TypographyP>

      <TypographyBlockquote>
        "After all," he said, "everyone enjoys a good joke, so it's only fair
        that they should pay for the privilege."
      </TypographyBlockquote>

      <TypographyH3>The Joke Tax</TypographyH3>
      <TypographyP>
        The king's subjects were not amused. They grumbled and complained, but
        the king was firm:
      </TypographyP>

      <TypographyList>
        <TypographyListItem>1st level of puns: 5 gold coins</TypographyListItem>
        <TypographyListItem>2nd level of puns: 5 gold coins</TypographyListItem>
        <TypographyListItem>3rd level of puns: 5 gold coins</TypographyListItem>
      </TypographyList>

      <TypographyP>
        As a result, people stopped telling jokes, and the kingdom fell into a
        gloom. But there was one person who refused to let the king's
        foolishness get him down: a court jester named Jokester.
      </TypographyP>

      <TypographyH3>Jokester's Revolt</TypographyH3>

      <TypographyP>
        Jokester began sneaking into the castle in the middle of the night and
        leaving jokes all over the place: under the king's pillow, in his soup,
        even in the royal toilet. The king was furious, but he couldn't seem to
        stop Jokester.
      </TypographyP>
      <TypographyP>
        And then, one day, the people of the kingdom discovered that the jokes
        left by Jokester were so funny that they couldn't help but laugh. And
        once they started laughing, they couldn't stop.
      </TypographyP>

      <TypographyH3> The People's Rebellion</TypographyH3>

      <TypographyP>
        The people of the kingdom, feeling uplifted by the laughter, started to
        tell jokes and puns again, and soon the entire kingdom was in on the
        joke.
      </TypographyP>

      <div className="my-6 w-full overflow-y-auto">
        <table className="w-full">
          <thead>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                King's Treasury
              </th>
              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                People's happiness
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Empty
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Overflowing
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Modest
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Satisfied
              </td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Full
              </td>
              <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                Ecstatic
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <TypographyP>
        The king, seeing how much happier his subjects were, realized the error
        of his ways and repealed the joke tax. Jokester was declared a hero, and
        the kingdom lived happily ever after.
      </TypographyP>
      <TypographyP>
        The moral of the story is: never underestimate the power of a good laugh
        and always be careful of bad ideas.
      </TypographyP>
    </div>
  );
}
