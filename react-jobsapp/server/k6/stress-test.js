import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  // Key configurations for avg load test in this section
  stages: [
    { duration: '1m', target: 100 }, // traffic ramp-up from 1 to 100 users over 5 minutes.
    { duration: '1.5m', target: 100 }, // stay at 100 users for 30 minutes
    { duration: '0.5m', target: 0 }, // ramp-down to 0 users
  ],
};

export default () => {
  const urlRes = http.get('http://localhost:8787/api/jobs');
  sleep(1);
  check(urlRes, {
    'status is 200': (r) => r.status === 200,
  });
};