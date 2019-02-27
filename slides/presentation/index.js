// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text,
  Code,
  CodePane
} from 'spectacle';

import CodeSlide from 'spectacle-code-slide';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif')
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
    code: '#122b45'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            APIer i Go
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" fit bold>
            Fagdag 08.02.2019
          </Text>
          <Notes>
            Web-baserte API'er. Bakgrunner er at vi bruker det hos Vipps. Hovedsaklig en introduksjon til språket,
            og hva som gjør det til et alternativ for web-baserte api'er (og kanskje spesielt mikroservicer)
          </Notes>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>
            Go's goals
          </Heading>
          <Text size={6} textColor="secondary">
            Clean procedural language designed for scalable cloud software
          </Text>
          <Notes>
            Skrevet for google. Må være raskt, stabilt, skalebart og takle mange samtidige brukere.
            Enkelt å vedlikeholde for store distribuerte teams (med stor utskiftning av utviklere
            , og mange juniorer)
          </Notes>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>
            Enkelt språk
          </Heading>
          <Text size={6} textColor="secondary">
            Lesbarhet og vedlikeholdbarhet => få features
          </Text>
          <Notes>
            Der det er en tradeoff mellom spennende features 
            og vedlikeholdbarhet vinner vedlikeholdbarhet.
          </Notes>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Text size={5} textColor="secondary">
            Ikke mange måter å løse samme problem på
          </Text>
          <Text size={6} textColor="secondary">
            (og fast formatering med <Code>fmt-go</Code>)
          </Text>
          <Notes>
            Skal kunne fokusere på businesslogikken, ikke hvorfor det er programmert på den måten
          </Notes>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="secondary" caps>
            Hva mangler?
          </Heading>
          <Heading size={6} textColor="secondary" caps>
            (et utvalg)
          </Heading>
          <List>
            <ListItem>Generics</ListItem>
            <ListItem>Map, Filter, Reduce etc</ListItem>
            <ListItem>Klasser</ListItem>
            <ListItem>Arv</ListItem>
            <ListItem>Spring Boot</ListItem>            
            <ListItem>Exceptions</ListItem>
          </List>
          <Notes>
            Det vil si at det er en del ting man er vant til fra andre språk som ikke finnes.
          </Notes>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="secondary" caps>
            Hva finnes?
          </Heading>
          <Heading size={6} textColor="secondary" caps>
            (også et utvalg)
          </Heading>
        </Slide>
        <CodeSlide
          bgColor="code"
          transition={['fade']} 
          lang="go"
          ranges={[
              { loc: [0, 3], title: "First-class functions" },
              { loc: [5, 8], title: "Higher-order functions" },
              { loc: [10, 16], title: "Kan returnere funksjoner" },
              { loc: [18, 23], title: "Kan definere funksjonstyper" },
            ]} 
          code={require('raw-loader!../assets/functions.example')} 
        />
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} textColor="primary" caps>
            goroutines
          </Heading>
          <Text size={6} textColor="secondary">
            Lettvekts tråder, enkle og billige å bruke. Effektivt for webservere.
          </Text>
          <Notes>
            Starter med bare 4KB stack, mot f.eks default java thread på 1MB. (Go gjør sin egen scheduling,
            og har dynamiske stacks.) Dvs lite overhead for å kjøre opp goroutines. 
            Skal kunne kjøre millioner av goroutines samtidig.
          </Notes>
        </Slide>
        <CodeSlide
          bgColor="code"
          transition={['fade']} 
          lang="go"
          ranges={[
              { loc: [0, 5], title: "Enkelt å kjøre opp goroutines" },
              { loc: [7, 8], title: "Kaller funksjonen som vanlig" },
              { loc: [9, 10], title: "Kaller funksjonen i en goroutine" },
              { loc: [11, 14], title: "Kan også gjøres med anonyme funksjoner" },
              { loc: [18, 25], title: "" },
            ]} 
          code={require('raw-loader!../assets/goroutine.example')} 
        />
        <CodeSlide
          bgColor="code"
          transition={['fade']} 
          lang="go"
          ranges={[
              { loc: [0, 0] },
              { loc: [2, 7], title: "Bra standardbibliotek" },
              { loc: [9, 13], title: "Inneholder f.eks en http server" },
              { loc: [15, 21], title: "Handlers er bare funksjoner" },
            ]} 
          code={require('raw-loader!../assets/server.example')} 
        />
        <CodeSlide
          bgColor="code"
          transition={['fade']} 
          lang="go"
          ranges={[
              { loc: [0, 0], title: "Structs og Interfaces" },
              { loc: [0, 5], title: "Ingen klasser, bare structs" },
              { loc: [8, 11], title: "Funksjoner kan legges på structs" },
              { loc: [14, 23], title: "Men vi vil utnytte typesystemet" },
              { loc: [26, 29], title: "Ikke alltid opptatt av aktivitetstypen" },
              { loc: [32, 40], title: "Både Run og Ride er nå en Activity" },
            ]} 
          code={require('raw-loader!../assets/interface.example')} 
        />
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="secondary" caps>
            Bonus
          </Heading>
          <Text>
            Go kompileres ned til en executable, og er ofte ikke større enn et par MB.
            Dette er bra for skalering i f.eks Kubernetes, du kan kjøre flere pods og de starter opp raskere.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="secondary" caps>
            Bonus #2
          </Heading>
          <Text>
            Veldig rask kompilering.
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="secondary" caps>
            Når bør go vurderes?
          </Heading>
          <List>
            <ListItem>Vedlikeholdbarhet er viktig</ListItem>
            <ListItem>Skalerbarhet er viktig</ListItem>
            <ListItem>Stort distribuert team</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Go ble valgt fordi det er kjedelig og stabilt</Quote>
            <Cite margin="10px 0 0 30px">Eivind Uggedal, Vipps</Cite>
          </BlockQuote>
          <Notes>
            Spurte Eivind Uggedal om hvorfor Vipps valgte Go. 
            Språket endrer seg sjeldent, og verdsetter vedlikeholdbarhet framfor kule features.
          </Notes>
        </Slide>
      </Deck>
    );
  }
}
