# Guida Configurazione Form Contatti - EmailJS

## Servizio Consigliato: EmailJS

**EmailJS** è il servizio più adatto per il tuo caso perché:
- ✅ Gratuito fino a 200 email/mese
- ✅ Non richiede backend o server
- ✅ Facile da configurare
- ✅ Supporta invio a più destinatari (le tue 2 caselle email)
- ✅ Template email personalizzabili
- ✅ Sicuro e affidabile

## Passaggi per la Configurazione

### 1. Registrazione su EmailJS

1. Vai su https://www.emailjs.com/
2. Clicca su "Sign Up" e crea un account gratuito
3. Verifica la tua email

### 2. Configurazione Email Service per Aruba

1. Vai su **Email Services** nel dashboard EmailJS
2. Clicca su **Add New Service**
3. Scegli **"Custom SMTP Server"** (o "Other" se disponibile)
4. Compila i dati SMTP di Aruba:

**Configurazione SMTP Aruba:**
- **Service Name**: Aruba Email (o un nome a tua scelta)
- **SMTP Server**: `smtps.aruba.it` (o `smtp.aruba.it`)
- **SMTP Port**: `465` (SSL) oppure `587` (TLS)
- **Secure Connection**: SSL/TLS
- **Username**: La tua email completa (es. `info@villepisciotta.com`)
- **Password**: La password della tua casella email Aruba

**Nota**: Se `smtps.aruba.it` non funziona, prova:
- `smtp.aruba.it` (porta 587 con TLS)
- `smtp.pec.aruba.it` (se è una PEC)

5. Clicca su **Create Service**
6. EmailJS testerà la connessione - se va tutto bene, il servizio sarà attivo

**Nota**: Puoi configurare entrambe le caselle email come servizi separati, oppure inviare a entrambe usando un template.

### 3. Creazione Template Email

1. Vai su **Email Templates**
2. Clicca su **Create New Template**
3. Configura il template:

**Subject (Oggetto):**
```
Nuovo messaggio da {{from_name}} - Ville Pisciotta
```

**Content (Contenuto):**
```
Hai ricevuto un nuovo messaggio dal form di contatto:

Nome: {{from_name}}
Email: {{from_email}}

Messaggio:
{{message}}

---
Messaggio inviato da: www.villepisciotta.com
```

4. Salva il template e prendi nota del **Template ID**

### 4. Configurazione per Invio a Due Email

**Opzione A - Template con CC (Consigliata):**
1. Nel template email, aggiungi nel campo "To Email":
   ```
   info@villepisciotta.com,seconda@email.com
   ```
   (separate da virgola)

2. Oppure usa il campo "CC" se disponibile nel template

**Opzione B - Due invii separati:**
Modifica il codice per inviare due email separate (vedi codice commentato nel file)

**Opzione C - Un servizio con reply-to:**
- Configura una casella come principale
- Usa l'altra come reply-to nel template

### 5. Ottenere le Chiavi API

1. Vai su **Account** → **General**
2. Trova il tuo **Public Key** (User ID)
3. Vai su **Email Services** e prendi nota del **Service ID**
4. Vai su **Email Templates** e prendi nota del **Template ID**

## Variabili da Inserire nel Codice

Dopo la configurazione, avrai bisogno di:
- `PUBLIC_KEY` (User ID) - Trovalo in Account → General
- `SERVICE_ID` (ID del servizio email) - Trovalo in Email Services → clicca sul servizio
- `TEMPLATE_ID` (ID del template) - Trovalo in Email Templates → clicca sul template

## Configurazione per Due Caselle Email Aruba

**Opzione 1 - Un servizio con due destinatari (Consigliata):**
1. Configura un servizio SMTP con una delle tue caselle email
2. Nel template, nel campo "To Email" metti: `email1@villepisciotta.com,email2@villepisciotta.com`
3. Entrambe riceveranno l'email

**Opzione 2 - Due servizi separati:**
1. Crea due servizi SMTP separati (uno per ogni casella)
2. Nel codice, invia due email separate (vedi commenti nel file Contatti.jsx)

## Alternative

### Formspree
- Gratuito fino a 50 invii/mese
- Più semplice ma meno flessibile
- URL: https://formspree.io/

### Backend Custom
- Richiede server (Node.js, PHP, Python)
- Più controllo ma più complesso
- Costi di hosting

---

*Dopo aver configurato EmailJS, dimmi e implementerò il codice nel form!*

