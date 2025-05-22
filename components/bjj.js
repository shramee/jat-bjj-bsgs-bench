"use client"

import { privateToPublicKey, compute_dlog } from "babyjubjub-utils";
import { useState } from "react";

export default function KeyGenerator() {
  const [keys, setKeys] = useState({
    privateKey: BigInt(0),
    publicKey: BigInt(0),
  });

  const [inputValue, setInputValue] = useState(''); // Initialize input value state
  const [result, setResult] = useState(null); // Initialize result state
  const [logs, setLogs] = useState([]); // Initialize result state

  const addLog = (log) => {
    setLogs((prevLogs) => [...prevLogs, log]);
  };

  const processInput = async (value, threads = 8) => {
    let v = BigInt(value);
    const point = await privateToPublicKey(v);
    const startTime = performance.now();
    let result_ = await compute_dlog(point, threads);
    const endTime = performance.now();
    addLog(v.toString(2).length + ` bits ${threads} threads: ${Math.round(endTime - startTime)}ms`);
    return result_;
  };

  const runBenchmarks = async () => {
    let p = [0xc19139cb, 0xc4e72e131a];
    addLog("_________");
    addLog("8 threads");
    addLog("---------");
    for (let i = 0; i < 2; i++) {
      await processInput(p[i] + 5, 8);
    }

    addLog("_________");
    addLog("4 threads");
    addLog("---------");
    for (let i = 0; i < 2; i++) {
      await processInput(p[i] + 2, 4);
    }

    addLog("________");
    addLog("1 thread");
    addLog("--------");
    for (let i = 0; i < 2; i++) {
      await processInput(p[i], 1);
    }
  }


  return (
    <div style={{ margin: '1em' }}>
      <h3 style={{ marginBottom: '1em' }}>Benchmark Jat9292/babyjubjub-utils</h3>
      {<button style={{ padding: '0.35em' }} onClick={runBenchmarks}>Run benchmarks</button>}

      {logs.map((log, index) => (
        <pre style={{ marginBottom: '.35em' }} key={index}>
          {log}
        </pre>
      ))}
    </div>
  );
}