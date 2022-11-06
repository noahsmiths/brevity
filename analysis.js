//process.env.GOOGLE_APPLICATION_CREDENTIALS="/Users/noah/Downloads/brevity-367715-75adb86b8ae4.json"

async function quickstart() {
    // Imports the Google Cloud client library
    const language = require('@google-cloud/language');
    const {auth} = require('google-auth-library');

    const authClient = auth.fromJSON({
        "type": "service_account",
        "project_id": "brevity-367715",
        "private_key_id": "75adb86b8ae4d504d3ccc07b8520e735f0aea4ce",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCKf8WuGD9Z6/kR\nkc7XkvZ4rLohDFOYHUJtugfaUr70xcPXJkWsZxnBzs3QiaTt0encDhYc/2NsXESC\nG7SRNX0Ly8ahqoq7y9/8x3cWzPkUwqEsUw9bppfyJ2u7kkAzoSphy+h13L5FGyzV\nKk0wP1TrXW4K/U9uvlgGDlRS2GbnpXDXxNS52nixEJprJ90pTud2mtU6pXPHE0dI\nAi28UbsDWhJ+6ZFu5G/FZdkgToa1QgA6KjsMUBkDSEA35E6bFHYHGrAn8ORotFdx\nFo6IujymEgyQQaM3RRZHD1ehrdr+SRuQOA1e+j+1QTQDTOy8rgaQE5avco2PO+a/\nwl/sK2eVAgMBAAECggEACyTZSdcTH9/kGFUQXNmrIc4aIuccQdDW47/Uem1uhoD0\nL1dZw1O/Z5AFkPpGTkl15PowLtCg1hr9ey+SAZ4Za+3PU3pGs/IlWXBORYQkJZa8\ng7XCNlhrAPXJjhvoNQ9Kevh+gZ9LowFbA+Llt5Rc95w6qsEzl0BTElesUsctToWr\nwbsvpZ1MLZsL1q53TXhtHUvPAoVnXX0wzmI/i4REACi1GSHwx5/ZL09C1QTjIke+\njI9jCqvo0vuZ9z/hBTS+IOwohfhn4eeeiuCq/5gv859ROGhla3AXgyI9HzI2c5tE\nlJhjACD9q42NDJwEfUM4D6p0tUT2R+0UFHzCLiSFIQKBgQDDzqJCrH6BamTtQzo0\n/P1RgtQX9LUeL+h04fL9yvHFYFAch9dXZj3Dpwh5/BFQZhORaFDcXxFO+PgvZNHx\nIJpYOoM+7iP+6gFUdonPypSFQFbOpqz+64XxsI47g0S+ui1cnCJyWa3BPVghNmN8\nsUb2qOOGwKbGdYuhBmszFvOrIQKBgQC1Ey/g12PQ+iyPG0Rf5ujnAK5wW9/C1qCk\nnYWC/mggb0QCqvvyqquPgTJdRWLRAg7yRR1d8hlrokfERfQSJ10z3i0Hs+xvURCp\nQ6B/YFVjIRKx0cNBVDSUkALZ52o7YZokDx1Oxuqb4r1EW+pqfAV0eT2EDubKqW4/\njip3qR2B9QKBgE7xIe3riV03vdUCQ5dVX/Pa4RN/bv3qprdo2QSFK5A90k6OXb04\n1THqR7qWa4yUetMm0WLnWR0Tt0u0RAgI8vEbNgrLC+wb/8lDuS/zJonKdLT/8cMc\nxXW5jr5jn/WdLeimciTUDv9Xcg6B1P5Sop+TW5faV+KvRUn4QoPofvjBAoGAAmub\nPDokz2pIpjELHO0NN+k+a6oOt5/+zbR9UF7uLWDPW+nFLF0zpdtoPO7sfzaz1HEw\nD01pIZMtumXk+UklacgSegPhqStAOcL5pjo3affLNC1Fmt3xRfsWzqrVNK39TXYW\nQjNOd370YLGJ1JqLyB7Gv7kjRJo3KwpPbwIHrvECgYAGoVNEaekdZLCUOMeH8UFr\nz7AA3d7fawgA4XIU6yvF7O7ZXU8LHylZ+HNQui/wpv3rgjBQecQXliWXzspGwl63\nchLFxe2jum2ZMIzCYoxqOHFKs3kZYX7vpMx1JZvTenLNDRWZZ3E1ZyME+6A8H6Yf\nIGaGYN9/OhQSvx+4pAAKQg==\n-----END PRIVATE KEY-----\n",
        "client_email": "brevity@brevity-367715.iam.gserviceaccount.com",
        "client_id": "116803191021161725559",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/brevity%40brevity-367715.iam.gserviceaccount.com"
      });
  
    // Instantiates a client
    const client = new language.LanguageServiceClient({
        authClient
    });
  
    // The text to analyze
    const text = 'Hello, world!';
  
    const document = {
      content: text,
      type: 'PLAIN_TEXT',
    };
  
    // Detects the sentiment of the text
    const [result] = await client.analyzeSentiment({document: document});
    const sentiment = result.documentSentiment;
  
    console.log(`Text: ${text}`);
    console.log(`Sentiment score: ${sentiment.score}`);
    console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
  }

  quickstart();