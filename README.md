
# Weaviate Next.js Template

## Overview

Weaviate is a cloud-native, open source vector database that is robust, fast, and scalable. Weaviate uses state-of-the-art machine learning (ML) models to turn your data - text, images, and more - into a searchable vector database.

Weaviate's typescript client is made for server based development, so it integrates with Next.js architecture easily. This means you can quickly build AI native Next.js applications using unstructured, multi-modal data sources that would otherwise be very challenging to work with.

This project is a Next.js template showcasing best practices for integrating Weaviate with Next.js applications. It serves as a starting point for JavaScript developers familiar with Next.js who want to understand and implement recommendeded patterns for building with Weaviate. 

You can clone this repo and extend it with your own functionality into any kind of AI application you like. More examples and implementations will continue to be added here to help you build quickly with Next.js and Weaviate.


## Resources

- [Weaviate Home Page](https://weaviate.io/)
- [Weaviate Typescript Academy Lessons](https://weaviate.io/developers/academy/js/starter_text_data)
- [Weaviate Typescript Client V3 Docs](https://weaviate.io/developers/weaviate/client-libraries/typescript/typescript-v3)
- [Weavate OpenAI Model Intergration Docs](https://weaviate.io/developers/weaviate/model-providers/openai)


## Features

- Built with Next.js 13+ App Router
- TypeScript for type safety
- React Server Components and Client Components
- Weaviate integration for vector search capabilities
- Styled with Tailwind CSS and shadcn/ui
- Responsive design
- Server Actions for Weaviate operations
- Example implementations of common Weaviate use cases


## Usage

The main demo page showcases various Weaviate operations:

- Creating a collection
- Importing documents
- Querying documents
- Performing keyword searches
- RAG (Retrieval-Augmented Generation) searches
- Deleting a collection

Each operation is implemented as a server action, demonstrating how to integrate Weaviate operations with Next.js server-side features.


## Project Structure


```
/
├── app/
│   ├── api/
│   │   └── weaviate/
│   │       └── route.ts
│   ├── layout.tsx
│   ├── page.tsx
│   └── weaviate-demo/
│       └── page.tsx
├── components/
│   ├── ui/
│   ├── WeaviateMain.tsx
│   ├── ActionButton.tsx
│   ├── SearchInput.tsx
│   └── ResultDisplay.tsx
├── lib/
│   └── weaviate-client.ts
├── actions/
│   ├── create-collection.ts
│   ├── import-data.ts
│   ├── query-data.ts
│   ├── keyword-search.ts
│   ├── rag-search.ts
│   └── delete-collection.ts
├── types/
├── utils/

```

## Getting Started

### Prerequisites

- Node.js 14.6.0 or newer
- npm or yarn
- A Weaviate cloud instance - If you don't have a Weaviate Cloud account you can get a free sandbox environment [by registering here](https://console.weaviate.cloud/).
  - Note: _Weaviate self-hosted integration support will be added to this repo shortly_
- An OpenAI API Key - If you don't have an OpenAI key, [register at OpenAI](https://platform.openai.com/signup) to get one.


### Installation

1. Clone the repository:

```
git clone https://github.com/danydoesdev/weaviate-nextjs-template.git
```

2. Navigate to the project directory:

```
cd weaviate-nextjs-template
```

3. Install dependencies:

```
npm install
```

or

```
yarn install
```

4. Set up environment variables:
   
Make a copy of `.env.review` in the root directory and rename it to `.env.local` then add your own API keys:

```
WCD_URL=your_weaviate_cluster_url
WCD_API_KEY=your_weaviate_api_key
OPENAI_APIKEY=your_openai_api_key
```

5. Run the development server:

```
npm run dev
```

or

```
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the app and interact with your cluster.


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- [Weaviate](https://weaviate.io/) for the vector database
- [Next.js](https://nextjs.org/) for the React framework
- [shadcn/ui](https://ui.shadcn.com/) for the UI components
