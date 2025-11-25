# Vercel Deployment Guide

This guide will walk you through deploying your Mental Coach Assistant application to Vercel, including both the Next.js frontend and FastAPI backend.

## Prerequisites

1. **GitHub Account** - Your code should be pushed to a GitHub repository
2. **Vercel Account** - Sign up at [vercel.com](https://vercel.com) (free tier is sufficient)
3. **OpenAI API Key** - You'll need this for the backend to work

## Step 1: Prepare Your Repository

Make sure all your code is committed and pushed to GitHub:

```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

## Step 2: Install Vercel CLI (Optional but Recommended)

You can deploy via the Vercel website or using the CLI. For CLI deployment:

```bash
npm install -g vercel
```

## Step 3: Deploy via Vercel Dashboard (Recommended for First Time)

### 3.1 Connect Your Repository

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository (`The-AI-Engineer-Challenge`)
4. Vercel will automatically detect your project structure

### 3.2 Configure Project Settings

**Root Directory:** Leave as default (project root)

**Framework Preset:** Vercel should auto-detect Next.js

**Build Settings:**
- **Build Command:** `cd frontend && npm install && npm run build`
- **Output Directory:** `frontend/.next`
- **Install Command:** `cd frontend && npm install`

**OR** you can use Vercel's auto-detection, which should work with our setup.

### 3.3 Configure Environment Variables

**Critical Step:** Add your OpenAI API key as an environment variable:

1. In the project settings, go to **"Environment Variables"**
2. Add a new variable:
   - **Name:** `OPENAI_API_KEY`
   - **Value:** Your OpenAI API key (starts with `sk-`)
   - **Environment:** Select all (Production, Preview, Development)

3. Click **"Save"**

### 3.4 Deploy

1. Click **"Deploy"**
2. Wait for the build to complete (this may take a few minutes)
3. Once deployed, you'll get a URL like `https://your-project.vercel.app`

## Step 4: Deploy via CLI (Alternative Method)

If you prefer using the command line:

```bash
# From the project root directory
vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Your account
- **Link to existing project?** → No (first time) or Yes (updates)
- **What's your project's name?** → mental-coach-assistant (or your choice)
- **In which directory is your code located?** → `./` (current directory)

**Important:** Before deploying, set the environment variable:

```bash
vercel env add OPENAI_API_KEY
# When prompted, paste your OpenAI API key
# Select all environments (Production, Preview, Development)
```

Then deploy:

```bash
vercel --prod
```

## Step 5: Verify Deployment

1. Visit your deployed URL (e.g., `https://your-project.vercel.app`)
2. You should see the Mental Coach Assistant interface
3. Try sending a message to test the chat functionality
4. Check that the API is working by testing the chat endpoint

## Step 6: Test API Endpoints

You can test the API directly:

```bash
curl -X POST https://your-project.vercel.app/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello!"}'
```

You should receive a JSON response with the AI's reply.

## Troubleshooting

### Issue: Build Fails

**Problem:** Build errors during deployment

**Solutions:**
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `frontend/package.json`
- Verify `requirements.txt` exists at the root for Python dependencies
- Check that `vercel.json` is correctly configured

### Issue: API Returns 500 Error

**Problem:** Backend API is not working

**Solutions:**
- Verify `OPENAI_API_KEY` environment variable is set in Vercel
- Check Vercel function logs (in the Vercel dashboard → Functions tab)
- Ensure `requirements.txt` includes all necessary packages:
  - `fastapi`
  - `uvicorn`
  - `openai`
  - `python-dotenv`

### Issue: Frontend Can't Connect to Backend

**Problem:** Frontend loads but chat doesn't work

**Solutions:**
- Verify `vercel.json` routing is correct
- Check browser console for CORS errors
- Ensure API routes are prefixed with `/api/`
- Check that the backend is deployed as a serverless function

### Issue: CORS Errors

**Problem:** Browser shows CORS errors

**Solutions:**
- The backend already has CORS middleware configured
- If issues persist, check that `allow_origins=["*"]` is set in `api/index.py`

## Project Structure for Vercel

Your project should have this structure:

```
.
├── api/
│   └── index.py          # FastAPI backend
├── frontend/
│   ├── app/              # Next.js App Router
│   ├── components/       # React components
│   ├── lib/             # Utilities
│   └── package.json     # Frontend dependencies
├── requirements.txt      # Python dependencies (for Vercel)
├── vercel.json          # Vercel configuration
└── README.md
```

## Environment Variables Summary

Make sure these are set in Vercel:

| Variable | Value | Required |
|----------|-------|----------|
| `OPENAI_API_KEY` | Your OpenAI API key | ✅ Yes |

## Updating Your Deployment

After making changes:

1. **Via Dashboard:**
   - Push changes to GitHub
   - Vercel will automatically trigger a new deployment
   - Or manually trigger from the Vercel dashboard

2. **Via CLI:**
   ```bash
   git push origin main
   vercel --prod
   ```

## Custom Domain (Optional)

To add a custom domain:

1. Go to your project in Vercel dashboard
2. Navigate to **Settings** → **Domains**
3. Add your custom domain
4. Follow DNS configuration instructions

## Monitoring and Logs

- **Function Logs:** Vercel Dashboard → Your Project → Functions tab
- **Build Logs:** Vercel Dashboard → Your Project → Deployments → Click on a deployment
- **Analytics:** Available in Vercel dashboard (may require upgrade)

## Cost Considerations

- **Hobby Plan (Free):** 
  - 100GB bandwidth/month
  - Serverless function execution time limits
  - Perfect for personal projects and demos

- **Pro Plan:** 
  - More bandwidth and execution time
  - Better for production applications

## Next Steps

Once deployed:

1. ✅ Test your application thoroughly
2. ✅ Share your deployment URL
3. ✅ Monitor usage and logs
4. ✅ Set up custom domain (optional)
5. ✅ Configure analytics (optional)

## Support

If you encounter issues:
- Check Vercel's [documentation](https://vercel.com/docs)
- Review function logs in Vercel dashboard
- Check the [Vercel community forum](https://github.com/vercel/vercel/discussions)

---

**Congratulations!** 🎉 Your Mental Coach Assistant is now live on Vercel!

