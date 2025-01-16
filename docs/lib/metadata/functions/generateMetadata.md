[**wais v0.1.0**](../../../README.md)

***

[wais](../../../README.md) / [lib/metadata](../README.md) / generateMetadata

# Function: generateMetadata()

> **generateMetadata**(`title`?, `description`?): `Metadata`

Defined in: [lib/metadata.ts:54](https://github.com/Wais-A/wais/blob/7c3da84dbef5fc8e8db40ecb0c38cd9d9660360b/src/lib/metadata.ts#L54)

Generates comprehensive metadata for a page

## Parameters

### title?

`string`

Optional page-specific title. If not provided, uses site default

### description?

`string`

Optional page-specific description. If not provided, uses site default

## Returns

`Metadata`

Next.js Metadata object containing:
  - Basic metadata (title, description)
  - Open Graph metadata for social sharing
  - Twitter Card metadata for Twitter sharing
  - Canonical URL for SEO

## Example

```typescript
// Basic usage with defaults
generateMetadata()

// Page-specific metadata
generateMetadata("Blog Post Title", "This is a blog post about...")
```

Note:  All URLs in the metadata are absolute, using BASE_URL as the prefix.
This is required for social media previews to work correctly.
