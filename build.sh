curl -X POST --data "payload={\"text\": \":slack: Starting Build - Web\"}" https://hooks.slack.com/services/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

cd /coin-collecting
git pull origin master
yarn
chmod +x build.sh

yarn build

rm -rf /var/www/html/*

rsync -auv /coin-collecting/public/ /var/www/html/

curl -X POST --data "payload={\"text\": \":slack: Deployed Website\"}" https://hooks.slack.com/services/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
