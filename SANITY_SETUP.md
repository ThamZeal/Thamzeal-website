# Sanity CMS Setup for Partners and Clients

## What has been created:

### 1. Schema Files
- **Partners Schema** (`src/sanity/schemaTypes/partner.ts`)
- **Clients Schema** (`src/sanity/schemaTypes/client.ts`)

### 2. Data Fetching Functions
- **Queries** (`src/sanity/lib/queries.ts`)
- **Data Functions** (`src/sanity/lib/data.ts`)

### 3. React Components
- **PartnersSection** (`src/app/components/PartnersSection.tsx`)
- **ClientsSection** (`src/app/components/ClientsSection.tsx`)

## How to set up data in Sanity Studio:

### Step 1: Access Sanity Studio
1. Start your development server: `npm run dev`
2. Navigate to: `http://localhost:3000/admin`
3. You should see the Sanity Studio interface

### Step 2: Add Partners
1. Click on "Partners" in the left sidebar
2. Click "Create new Partner"
3. Fill in the following fields:
   - **Partner Name**: e.g., "XyberAI"
   - **Partner Logo**: Upload the logo image
   - **Alternative Text**: e.g., "XyberAI Logo"
   - **Description**: Brief description about the partnership
   - **Website URL**: Partner's website (optional)
   - **Active Partner**: Toggle to show/hide on website
   - **Display Order**: Number to control the order (0, 1, 2, etc.)

### Step 3: Add Clients
1. Click on "Clients" in the left sidebar
2. Click "Create new Client"
3. Fill in the following fields:
   - **Client Name**: e.g., "Astute Business Solutions"
   - **Client Logo**: Upload the logo image
   - **Alternative Text**: e.g., "Astute Business Solutions Logo"
   - **Description**: Brief description about the client/project
   - **Website URL**: Client's website (optional)
   - **Project Type**: Select from dropdown (Web Development, Mobile App, etc.)
   - **Active Client**: Toggle to show/hide on website
   - **Display Order**: Number to control the order (0, 1, 2, etc.)
   - **Client Testimonial**: Optional testimonial text

### Step 4: Managing Content
- **To reorder**: Change the "Display Order" numbers
- **To hide**: Toggle "Active Partner/Client" to false
- **To update**: Edit any existing entry
- **To delete**: Use the three-dot menu on each entry

## Current Migration Status:
- ✅ Schemas created and registered
- ✅ Data fetching functions implemented
- ✅ React components created
- ✅ Landing page updated to use CMS data
- ✅ Fallback to empty arrays if no data exists

## Next Steps:
1. Add your partner and client data through the Sanity Studio
2. The website will automatically display the data from CMS
3. You can manage all logos and information through the admin panel

## Benefits:
- **Dynamic Content**: Add/remove/edit partners and clients without code changes
- **Easy Management**: Non-technical users can manage content
- **Image Optimization**: Sanity handles image optimization and CDN delivery
- **SEO Friendly**: Proper alt texts and structured data
- **Order Control**: Easy reordering through display order field
- **Active/Inactive Toggle**: Show/hide partners and clients without deleting
