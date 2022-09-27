# learn-kafka

Learn kafka

## Creating a topic

    kafka-topics --bootstrap-server broker:9092 --create --topic orders-events --if-not-exists

We use the namespace `kafka-topics` to manage topics.
Explaining the command

1. `--bootstrap-server broker:9092` set the server to connect to.
2. `--create` this a create operation.
3. `--topic orders-events` the topic name to create.
4. `--if-not-exists` create only if topic does not exist.

## List topics

To list topics we use `--list` option

    kafka-topics --bootstrap-server broker:9092 --list

## Produce messages


    kafka-console-producer --bootstrap-server broker:9092 --topic events-orders

Each line is a message, press `CTRL+D` to exit.

## Consume Messages

    kafka-console-consumer --bootstrap-server broker:9092 --topic orders-events --from-beginning