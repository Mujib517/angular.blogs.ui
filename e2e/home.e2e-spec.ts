import { browser, element, by } from 'protractor';

describe("Home Page", () => {

    browser.get('/');

    it("should have Angular.Blogs.Ui as title of the page", () => {
        expect(browser.getTitle()).toBe('Angular.Blogs.Ui');
    });

    it('should have home page heading', () => {
        var heading = element(by.css("h1"));
        expect(heading.getText()).toBe("Home Page");
    });

    it("should navigate user to contact page", () => {
        var link = element(by.css('a[routerlink="/contact"]'));
        link.click();
        expect(browser.getCurrentUrl()).toBe("http://localhost:49152/contact");
    });

    it("should navigate user to contact page", () => {
        var link = element(by.css('a[routerlink="/blogs"]'));
        link.click();
        expect(browser.getCurrentUrl()).toBe("http://localhost:49152/blogs");
    });

    it("should show new blog button", () => {
        var btn = element(by.css('.btn.btn-success'));
        expect(btn.isDisplayed()).toBe(true);
    });

    it("should have save button disabled", () => {
        var btn = element(by.css('.btn.btn-success'));

        btn.click();

        var btnSave = element(by.css('.btn.btn-danger'));

        expect(btnSave.isEnabled()).toBeFalsy();
    });


    // it("should enable button when validation passes", () => {
    //     var txtTitle = element(by.css('input[name="title"]'));
    //     var txtContent = element(by.css('textarea[name="content"]'));

    //     txtTitle.sendKeys("My Newest blog from automated tests");
    //     txtContent.sendKeys("Blog content goes here");

    //     var btnSave = element(by.css('.btn.btn-danger'));
    //     expect(btnSave.isEnabled()).toBeTruthy();
    // });

    it('should show validation errors', () => {

        var txtTitle = element(by.css('input[name="title"]'));
        var txtContent = element(by.css('textarea[name="content"]'));

        txtTitle.clear();
        txtContent.clear();

        txtTitle.click();

        txtContent.sendKeys("Content goes here");

        browser.sleep(2000);

        var errMsg = element(by.css('.text-danger'));
        expect(errMsg.isDisplayed()).toBe(true);
    });

    it("should enable button when validation passes", () => {
        var txtTitle = element(by.css('input[name="title"]'));
        var txtContent = element(by.css('textarea[name="content"]'));

        txtTitle.sendKeys("My Newest blog from automated tests");
        txtContent.sendKeys("Blog content goes here");

        var btnSave = element(by.css('.btn.btn-danger'));
        btnSave.click();

        expect(browser.getCurrentUrl()).toBe("http://localhost:49152/blogs");
    });

    it('should take me blog detail page', () => {
        browser.get('/blogs');
        var id = '597800e668f3662f785f55a3';

        var divs = element.all(by.css('.well'));
        var div = divs.first();
        var a = div.element(by.css("a"));
        a.click();

        expect(browser.getCurrentUrl()).toBe("http://localhost:49152/blogs/" + id);
    });

});