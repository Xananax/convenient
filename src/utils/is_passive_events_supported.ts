import { no_op } from './no_op'

let passive_events_supported = false;

try {
  const opts = Object.defineProperty({}, 'passive', {
    get() {
      passive_events_supported = true;
    }
  });
  window.addEventListener('test', no_op, opts);
}
catch (e) {
  //
}

window.removeEventListener('test', no_op);

export { passive_events_supported }