# Benchmarks for jat9292/babyjubjub-utils

This repository contains benchmarks for the [babyjubjub-utils](https://github.com/jat9292/babyjubjub-utils) Node.js package. The original package implements utility functions for interacting with the Baby Jubjub elliptic curve and the [noir-elgamal](https://github.com/jat9292/noir-elgamal) Noir package.

## Benchmarks on Mac M3 Pro

The discrete logarithm computation for ElGamal decryption has been optimized using WebAssembly and Web Workers for parallelization. Here are the benchmark results:

### _Mac M3 Pro_

### 8 threads
- 32 bits: 2525ms
- 40 bits: 11049ms

### 4 threads
- 32 bits: 4707ms
- 40 bits: 11188ms

### 1 thread
- 32 bits: 15890ms
- 40 bits: 22218ms

As shown by the benchmarks, using multiple threads significantly improves performance, especially for 32-bit operations.

## Running the Benchmark App

This repository is specifically for benchmarking the babyjubjub-utils package. To run the benchmarks:

Build the project:
```bash
pnpm build
```

Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the benchmark results.


## Links

- [jat9292/babyjubjub-utils](https://github.com/jat9292/babyjubjub-utils)
- [jat9292/noir-elgamal](https://github.com/jat9292/noir-elgamal)

## License

MIT