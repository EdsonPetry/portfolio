import { useState } from 'react'
import { PrimeReactProvider } from 'primereact/api';
import { Terminal } from 'primereact/terminal';
import { TerminalService } from 'primereact/terminalservice';
import { Card } from 'primereact/card'
import "primereact/resources/themes/lara-light-cyan/theme.css";


function App() {

  return (
    <>
      <PrimeReactProvider>
        <Card title="Test terminal">
          <Terminal
            welcomeMessage="Terminal portfolio WIP"
            prompt="host $"
            pt={{
              root: 'bg-gray-900 text-white border-round',
              prompt: 'text-gray-400 mr-2',
              command: 'text-primary-300',
              response: 'text-primary-300'
            }}
          />
        </Card>
      </PrimeReactProvider>
    </>
  )
}

// export default App
