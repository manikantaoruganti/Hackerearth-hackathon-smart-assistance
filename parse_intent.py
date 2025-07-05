from transformers import pipeline

# Load an intent parsing LLM
model = pipeline("text2text-generation", model="mistralai/Mistral-7B-Instruct")

def extract_intent(nl_input):
    prompt = f"Convert the following to a smart contract intent: {nl_input}"
    result = model(prompt, max_length=100)
    return result[0]["generated_text"]
