import * as React from 'react';

export default function Dashboard() {
  return (
    <div style={{ padding: '2rem' }}>
      <iframe
        title="realestate"
        width="100%"
        height="600"
        src="https://app.powerbi.com/reportEmbed?reportId=9ae5b4b4-2689-48ab-8ff4-4e4c8e770282&autoAuth=true&ctid=23035d1f-133c-44b5-b2ad-b3aef17baaa1"
        frameBorder="0"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
}
