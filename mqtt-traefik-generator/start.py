#!/usr/bin/env python3
import settings
import paho.mqtt.publish as publish
import time
import random
import logging

logging.basicConfig(format='%(asctime)s [%(levelname)s] %(message)s',datefmt='%d-%b-%y %H:%M:%S',  level=logging.INFO)
logging.info("Server: " + settings.mqtt_broker_hostname)
logging.info("Port: " + str(settings.mqtt_broker_port))

starttime = time.time()
while True:
    payload = random.randint(1, 49)
    current_time_in_seconds = round(time.time() - starttime)
    if current_time_in_seconds != 0 and current_time_in_seconds % 15 == 0:
        payload = random.randint(50, 100)
        if payload < 80:
          logging.warning('Payload: ' + str(payload))
        if payload >= 80:
          logging.error('Payload: ' + str(payload))
    else:
        logging.info('Payload: ' + str(payload))
    if current_time_in_seconds >= 60:
        starttime = time.time() + 1
    publish.single(hostname=settings.mqtt_broker_hostname,
                   topic=settings.mqtt_broker_topic,
                   payload=payload,
                   keepalive=15)
    time.sleep(1)

