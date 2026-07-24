# Exercise 6: Proxy Pattern

## What is the Proxy Pattern?
The Proxy Pattern provides a **surrogate or placeholder** for another object to control access to it — adding lazy initialization, caching, logging, or access control.

## Scenario
An image viewer that loads images from a remote server. The `ProxyImage` delays the expensive server load until the image is actually needed, and caches it for subsequent calls.

## Classes
| File | Role |
|------|------|
| `Image.java` | Subject interface with `display()` |
| `RealImage.java` | Real subject — loads image from server on construction |
| `ProxyImage.java` | Proxy — lazy-loads and caches `RealImage` |
| `ProxyTest.java` | Test showing first call loads, second call uses cache |

## How to Run
```bash
javac *.java
java ProxyTest
```

## Expected Output
```
First display:
Cache miss. Fetching image...
Loading image from remote server: photo.jpg
Displaying image: photo.jpg

Second display:
Cache hit. Using cached image for: photo.jpg
Displaying image: photo.jpg
```

## Key Concepts
- **Lazy initialization** — `RealImage` is only created when first needed
- **Caching** — subsequent calls reuse the already-loaded instance
- Client code works with the `Image` interface and is unaware of the proxy
