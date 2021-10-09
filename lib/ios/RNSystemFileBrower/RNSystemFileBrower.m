//
//  RNSystemFileBrower.m
//  Example
//
//  Created by apple on 2021/10/8.
//

#import "RNSystemFileBrower.h"

#import <LewinVCRouter/LewinVCRouter.h>

@interface RNSystemFileBrower ()

@property(nonatomic, assign) RCTPromiseResolveBlock success;

@end

@implementation RNSystemFileBrower
RCT_EXPORT_MODULE();

static RCTPromiseResolveBlock successBlock = nil;

// types @[@""]
// title

RCT_EXPORT_METHOD(openFileBrower:(NSDictionary*)params success:(RCTPromiseResolveBlock)success failure:(RCTResponseErrorBlock)failure){
  successBlock = success;
  dispatch_sync(dispatch_get_main_queue(), ^{
     // 可以选择的文件类型
    NSArray*types =@[

    @"public.data",

    @"com.microsoft.powerpoint.ppt",

    @"com.microsoft.word.doc",

    @"com.microsoft.excel.xls",

    @"com.microsoft.powerpoint.pptx",

    @"com.microsoft.word.docx",

    @"com.microsoft.excel.xlsx",

    @"public.avi",

    @"public.3gpp",

    @"public.mpeg-4",

    @"com.compuserve.gif",

    @"public.jpeg",

    @"public.png",

    @"public.plain-text",

    @"com.adobe.pdf"

    ];// 可以选择的文件类型
    if (params != nil && [[params allKeys] containsObject:@"types"]) {
      types = params[@"types"];
    }

    UIDocumentBrowserViewController *documentPicker = [[UIDocumentBrowserViewController alloc] initForOpeningFilesWithContentTypes:types];
        documentPicker.delegate = self;
    documentPicker.allowsDocumentCreation = NO;
    documentPicker.modalPresentationStyle = UIModalPresentationPopover;
//        [self presentViewController:documentPicker animated:YES completion:nil];
    UIViewController *vv = [[LewinVCRouter sharedInstance] rootViewController];
    [vv presentViewController:documentPicker animated:YES completion:nil];
      
  });
  
}

- (void)documentBrowser:(UIDocumentBrowserViewController *)controller didPickDocumentsAtURLs:(NSArray<NSURL *> *)documentURLs  API_AVAILABLE(ios(11.0)){
  NSLog(@"didPickDocumentsAtURLs:%@", documentURLs);
  [controller dismissViewControllerAnimated:YES completion:nil];
  [self callUrl:documentURLs];
}

- (void)documentBrowser:(UIDocumentBrowserViewController *)controller didPickDocumentURLs:(NSArray<NSURL *> *)documentURLs  API_AVAILABLE(ios(11.0)){
  NSLog(@"didPickDocumentURLs:%@", documentURLs);
  [controller dismissViewControllerAnimated:YES completion:nil];
  [self callUrl:documentURLs];
}

- (void)documentBrowser:(UIDocumentBrowserViewController *)controller didRequestDocumentCreationWithHandler:(void (^)(NSURL * _Nullable, UIDocumentBrowserImportMode))importHandler  API_AVAILABLE(ios(11.0)){
  NSLog(@"didRequestDocumentCreationWithHandler");
}

-(void)callUrl:(NSArray<NSURL *> *)documentURLs {
    NSMutableDictionary *result = [NSMutableDictionary new];
    if (documentURLs != nil && documentURLs.count > 0) {
        [result setObject:documentURLs[0].absoluteString forKey:@"url"];
    }
  
    if (successBlock != nil) {
        successBlock(result);
    }
}

@end
