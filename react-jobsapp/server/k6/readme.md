# Performance Testing with K6 and the Jobs API

## Testing Performance of the Hono Web API

### Using localhost endpoint on WSL 2

```bash
    execution: local
        script: k6/stress-test.js
        output: -

     scenarios: (100.00%) 1 scenario, 100 max VUs, 3m30s max duration (incl. graceful stop):
              * default: Up to 100 looping VUs for 3m0s over 3 stages (gracefulRampDown: 30s, gracefulStop: 30s)


     ✓ status is 200

     checks.........................: 100.00% ✓ 13517     ✗ 0
     data_received..................: 60 MB   332 kB/s
     data_sent......................: 1.2 MB  6.6 kB/s
     http_req_blocked...............: avg=5.87µs   min=1.31µs  med=4.17µs   max=371.27µs p(90)=5.64µs  p(95)=6.59µs
     http_req_connecting............: avg=1µs      min=0s      med=0s       max=228.4µs  p(90)=0s      p(95)=0s
     http_req_duration..............: avg=2.69ms   min=1.23ms  med=2.33ms   max=76.13ms  p(90)=3.46ms  p(95)=4.25ms
       { expected_response:true }...: avg=2.69ms   min=1.23ms  med=2.33ms   max=76.13ms  p(90)=3.46ms  p(95)=4.25ms
     http_req_failed................: 0.00%   ✓ 0         ✗ 13517
     http_req_receiving.............: avg=182.82µs min=13.84µs med=165.08µs max=20.79ms  p(90)=279.8µs p(95)=333.99µs
     http_req_sending...............: avg=17.72µs  min=4.98µs  med=17µs     max=558.73µs p(90)=22.9µs  p(95)=29.13µs
     http_req_tls_handshaking.......: avg=0s       min=0s      med=0s       max=0s       p(90)=0s      p(95)=0s
     http_req_waiting...............: avg=2.49ms   min=1.07ms  med=2.14ms   max=75.97ms  p(90)=3.25ms  p(95)=4ms
     http_reqs......................: 13517   74.847649/s
     iteration_duration.............: avg=1s       min=1s      med=1s       max=1.07s    p(90)=1s      p(95)=1s
     iterations.....................: 13517   74.847649/s
     vus............................: 2       min=2       max=100
     vus_max........................: 100     min=100     max=100

running (3m00.6s), 000/100 VUs, 13517 complete and 0 interrupted iterations
default ✓ [======================================] 000/100 VUs 3m0s
```

## Testing with a .NET 8 Minimal API

### Using localhost endpoint on WSL 2

```bash
    execution: local
        script: stress-test.js
        output: -

     scenarios: (100.00%) 1 scenario, 100 max VUs, 3m30s max duration (incl. graceful stop):
              * default: Up to 100 looping VUs for 3m0s over 3 stages (gracefulRampDown: 30s, gracefulStop: 30s)


     ✓ status is 200

     checks.........................: 100.00% ✓ 13546     ✗ 0
     data_received..................: 61 MB   336 kB/s
     data_sent......................: 1.2 MB  6.6 kB/s
     http_req_blocked...............: avg=6.15µs   min=1.52µs   med=3.98µs   max=4.52ms   p(90)=5.33µs   p(95)=6.29µs
     http_req_connecting............: avg=1.34µs   min=0s       med=0s       max=4.18ms   p(90)=0s       p(95)=0s
     http_req_duration..............: avg=491.45µs min=142.15µs med=484.97µs max=4.11ms   p(90)=576.83µs p(95)=611.16µs
       { expected_response:true }...: avg=491.45µs min=142.15µs med=484.97µs max=4.11ms   p(90)=576.83µs p(95)=611.16µs
     http_req_failed................: 0.00%   ✓ 0         ✗ 13546
     http_req_receiving.............: avg=53.95µs  min=8.29µs   med=51.78µs  max=707.31µs p(90)=82.79µs  p(95)=92.86µs
     http_req_sending...............: avg=17.12µs  min=4.71µs   med=16.49µs  max=449.67µs p(90)=21.5µs   p(95)=27.17µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=420.38µs min=101.25µs med=415.36µs max=3.99ms   p(90)=499.26µs p(95)=533.15µs
     http_reqs......................: 13546   75.157442/s
     iteration_duration.............: avg=1s       min=1s       med=1s       max=1s       p(90)=1s       p(95)=1s
     iterations.....................: 13546   75.157442/s
     vus............................: 2       min=2       max=100
     vus_max........................: 100     min=100     max=100


running (3m00.2s), 000/100 VUs, 13546 complete and 0 interrupted iterations
default ✓ [======================================] 000/100 VUs  3m0s
```
