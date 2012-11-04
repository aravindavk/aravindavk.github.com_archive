default:
	jekyll --server
prod:
	jekyll
	rsync -zrptL --delete-after -e "ssh" --stats --progress --exclude=".git*" _site/* aravindavk.in:public_html/