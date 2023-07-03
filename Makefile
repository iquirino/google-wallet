build: clean build-ts

build-ts:
	npx tsc -p tsconfig.json
	npx tsc -p tsconfig.cjs.json
	echo "{\"type\": \"commonjs\"}" > lib/cjs/package.json

clean:
	rm -rf lib