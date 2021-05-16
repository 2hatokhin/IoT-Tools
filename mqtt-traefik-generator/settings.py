
import os
import random

mqtt_broker_hostname = os.environ.get("MQTT_BROKER_HOSTNAME", "localhost")
mqtt_broker_port = os.environ.get("MQTT_BROKER_PORT", 1883)
mqtt_broker_password = os.environ.get("MQTT_BROKER_PASSWORD", "")
mqtt_broker_topic = "house/bulb1"

