curl -X POST --data "payload={\"text\": \":slack: Starting Build\"}" https://hooks.slack.com/services/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

rm -rf /home/coin-collecting

git clone https://github.com/theWickedWebDev/coin-collecting.git
rsync -auv /home/coin-collecting/react/public/ /var/www/html/

curl -X POST --data "payload={\"text\": \":slack: Deployed Website\"}" https://hooks.slack.com/services/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
