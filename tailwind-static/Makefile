.PHONY: build

CPP=cpp
SOURCE_HTML_DIR=./src
TARGET_HTML_DIR=./public

INCLUDES := $(shell find $(SOURCE_HTML_DIR) -name "*.incl")
GENERATED_HTML := $(patsubst $(SOURCE_HTML_DIR)/%.html,$(TARGET_HTML_DIR)/%.html,$(wildcard $(SOURCE_HTML_DIR)/*.html)) \
		  $(patsubst $(SOURCE_HTML_DIR)/%.html,$(TARGET_HTML_DIR)/%.html,$(wildcard $(SOURCE_HTML_DIR)/subdir/*.html))

$(TARGET_HTML_DIR)/%.html: $(SOURCE_HTML_DIR)/%.html $(INCLUDES)
	mkdir -p $(@D)
	cpp $(CPPFLAGS) $< | sed '/^#/d' > $@


html: $(GENERATED_HTML)

build: html
	npm run build
