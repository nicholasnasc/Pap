import React from 'react';
import Layout from '@theme/Layout';

export default function CMS() {
  return (
    <Layout title="CMS - PAP Tools" description="Sistema de gerenciamento de conteúdo">
      <div style={{ 
        width: '100%', 
        minHeight: '100vh'
      }}>
        <iframe
          src="/admin/"
          style={{
            width: '100%',
            height: '100vh',
            border: 'none'
          }}
          title="Decap CMS"
        />
      </div>
    </Layout>
  );
}
