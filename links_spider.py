import scrapy
from scrapy.spiders import CrawlSpider, Rule
from scrapy.linkextractors import LinkExtractor
from scrapy import Selector
#download scrapy from the web before running

class LinksSpider(CrawlSpider):
    name = "links"
    handle_httpstatus_list = [404, 401, 403]
    allowed_domains = ['inside-files', 'inside-files.mathworks.com']
    #choose your starting url
    start_urls = [
        'http://inside-files/dev/eps/WIT/WebWidgets/js-doc/latest/'

    ]
    #make rules for where you want to search: the first rule is the most important and should be smaller in scope
    rules = (
        Rule(LinkExtractor(allow=('dev/eps/WIT/WebWidgets',)), callback='parse_item', errback='parse_item', follow='True'),
        Rule(LinkExtractor(allow_domains=('inside-files',)), callback='parse_item')
        )

    #then run the following in terminal to get a json output:
    # scrapy crawl links -o output.json

    def parse_item(self, response):
        for body in response.css('body'):
            if(body.css('h1::text').get() == 'Not Found'):

                yield {
                    'url': response.url

                }
            elif( response.status == 404):
                yield{
                    'url': response.url
                }
