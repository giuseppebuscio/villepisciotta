# Configurazione EmailJS con Caselle Email Aruba

## Passo 1: Accedi a EmailJS

1. Vai su https://www.emailjs.com/
2. Accedi al tuo account (o registrati se non l'hai ancora fatto)

## Passo 2: Crea il Servizio SMTP

1. Nel dashboard, vai su **Email Services**
2. Clicca su **Add New Service**
3. Seleziona **"Custom SMTP Server"** o **"Other"**

## Passo 3: Configurazione SMTP Aruba

Compila i seguenti campi:

### Dati Base
- **Service Name**: `Aruba Email` (o un nome a tua scelta)
- **Description**: (opzionale) `Servizio email Aruba per form contatti`

### Configurazione SMTP
- **SMTP Server**: `smtps.aruba.it`
- **SMTP Port**: `465`
- **Secure Connection**: Seleziona **SSL/TLS**
- **Username**: La tua email completa (es. `info@villepisciotta.com`)
- **Password**: La password della tua casella email Aruba

### Alternative se la configurazione sopra non funziona:

**Opzione A - Porta 587 (TLS):**
- **SMTP Server**: `smtp.aruba.it`
- **SMTP Port**: `587`
- **Secure Connection**: **TLS**

**Opzione B - Se hai una PEC:**
- **SMTP Server**: `smtp.pec.aruba.it`
- **SMTP Port**: `465` o `587`
- **Secure Connection**: **SSL/TLS**

## Passo 4: Test della Connessione

1. Dopo aver compilato tutti i campi, clicca su **Create Service**
2. EmailJS testerà automaticamente la connessione
3. Se vedi un messaggio di successo, il servizio è configurato correttamente
4. Se vedi un errore, verifica:
   - Username e password corretti
   - Porta corretta (465 o 587)
   - Tipo di connessione sicura (SSL/TLS)

## Passo 5: Configurazione per Due Caselle Email

### Metodo 1: Un Servizio, Due Destinatari (Più Semplice)

1. Configura un servizio SMTP con una delle tue caselle
2. Nel template email, nel campo **"To Email"** inserisci:
   ```
   info@villepisciotta.com,seconda@villepisciotta.com
   ```
   *(separate da virgola, senza spazi)*

3. Entrambe le caselle riceveranno l'email

### Metodo 2: Due Servizi Separati

1. Crea un primo servizio SMTP con la prima casella email
2. Crea un secondo servizio SMTP con la seconda casella email
3. Nel codice, invia due email separate (vedi commenti in Contatti.jsx)

## Passo 6: Crea il Template Email

1. Vai su **Email Templates**
2. Clicca su **Create New Template**
3. Usa il template di esempio in `ESEMPIO_TEMPLATE_EMAILJS.md`

## Passo 7: Ottieni le Chiavi API

1. **Public Key (User ID)**:
   - Vai su **Account** → **General**
   - Copia il **Public Key**

2. **Service ID**:
   - Vai su **Email Services**
   - Clicca sul servizio creato
   - Copia il **Service ID**

3. **Template ID**:
   - Vai su **Email Templates**
   - Clicca sul template creato
   - Copia il **Template ID**

## Passo 8: Inserisci le Chiavi nel Codice

Apri `src/pages/Contatti.jsx` e sostituisci alle righe 15-17:

```javascript
const EMAILJS_PUBLIC_KEY = 'il_tuo_public_key_qui'
const EMAILJS_SERVICE_ID = 'il_tuo_service_id_qui'
const EMAILJS_TEMPLATE_ID = 'il_tuo_template_id_qui'
```

## Troubleshooting

### Errore di connessione SMTP
- Verifica username e password
- Prova la porta 587 invece di 465 (o viceversa)
- Assicurati che SSL/TLS sia selezionato correttamente
- Controlla che la casella email non abbia restrizioni di sicurezza

### Email non arrivano
- Controlla la cartella spam
- Verifica che il template sia configurato correttamente
- Controlla i log in EmailJS → Email Logs

### Supporto Aruba
Se hai problemi con la configurazione SMTP, contatta il supporto Aruba per:
- Confermare i dati SMTP corretti
- Verificare che la casella email supporti SMTP
- Eventuali restrizioni di sicurezza

---

*Dopo aver completato questi passaggi, il form sarà completamente funzionante!*

