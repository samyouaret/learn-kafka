const Kafka = require('node-rdkafka');

const producer = new Kafka.Producer({
//   'client.id': 'kafka',
  'metadata.broker.list': 'localhost:9092',
//   'compression.codec': 'gzip',
//   'retry.backoff.ms': 200,
//   'message.send.max.retries': 10,
//   'socket.keepalive.enable': true,
//   'queue.buffering.max.messages': 100000,
//   'queue.buffering.max.ms': 1000,
//   'batch.num.messages': 1000000,
//   'dr_cb': true
});

producer.connect();

producer.on('ready',()=>{
    try {
        producer.produce('orders-events',null,Buffer.from("First message"),
        Date.now())
    } catch (error) {
        console.error(err);   
    }
});


// Any errors we encounter, including connection errors
producer.on('event.error', function(err) {
  console.error('Error from producer');
  console.error(err);
})
//send after 100ms
producer.setPollInterval(100);