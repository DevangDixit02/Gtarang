# Setting Up Vercel Environment Variables

Follow these steps to add your Gemini API key to Vercel:

## Via Vercel Dashboard (Recommended)

1. Log in to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your GTarang project
3. Navigate to **Settings** → **Environment Variables**
4. Add a new variable:
   - **Name**: `NEXT_PUBLIC_GEMINI_API_KEY`
   - **Value**: `AIzaSyCL7dXbddeF7jr8EhLf5qG5ZZXDICRm0YY`
   - **Environments**: Check all environments (Production, Preview, Development)
5. Click **Save**
6. Redeploy your application for changes to take effect

## Via Vercel CLI (Alternative)

If you prefer using the command line:

```bash
# Install Vercel CLI if not already installed
npm install -g vercel

# Login to Vercel
vercel login

# Add the secret (will prompt for the value)
vercel secret add next_public_gemini_api_key AIzaSyCL7dXbddeF7jr8EhLf5qG5ZZXDICRm0YY

# Link this secret to your project environment variables
vercel env add NEXT_PUBLIC_GEMINI_API_KEY production
vercel env add NEXT_PUBLIC_GEMINI_API_KEY preview
vercel env add NEXT_PUBLIC_GEMINI_API_KEY development

# Redeploy your application
vercel --prod
```

## Security Note

The `vercel.json` file in your project is configured to use the Gemini API key as a Vercel secret. This helps keep your API key secure by not hardcoding it directly in any files.

## Troubleshooting

If your chatbot doesn't work after deployment:

1. Check the Vercel deployment logs for any errors
2. Verify the environment variable is correctly set in your Vercel project settings
3. Make sure your Gemini API key is valid and has the necessary permissions
4. Try redeploying your application after confirming the environment variables

## Additional Security Measures

Consider rotating your API key periodically for enhanced security. When you update your API key:

1. Generate a new key in the [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Update the key in your Vercel environment variables
3. Redeploy your application 