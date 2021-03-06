default: all

publish: all
	ghp-import -n -p -m "Update with latest changes." target/doc 

all: modules landing resources scripts

modules: src/*.rs
	cargo doc

landing: landing/index.html landing/landing.css
	cp landing/index.html target/doc
	cp landing/landing.css target/doc

resources: resources/*
	cp resources/* target/doc

scripts:
	@echo "\`scripts\` not yet implemented."
