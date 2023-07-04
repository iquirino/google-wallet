build: clean build-ts

build-ts:
	npx tsc -p tsconfig.esm.json
	npx tsc -p tsconfig.cjs.json
	npx tsc -p tsconfig.tsd.json
	echo "{\"type\": \"commonjs\"}" > lib/cjs/package.json
	echo "{\"type\": \"module\"}" > lib/esm/package.json

clean:
	rm -rf lib
	rm -rf dist