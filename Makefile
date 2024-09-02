.PHONY: install server format

PACKAGE_MANAGE = pnpm

install:
	@echo "🏗️ Instalando dependencias del proyecto"
	$(PACKAGE_MANAGE) install

server:
	@echo "🏃 Ejecutando el proyecto"
	$(PACKAGE_MANAGE) dev

format:
	@echo "🖊️ Aplicando formato al codigo"
	${PACKAGE_MANAGE} format
